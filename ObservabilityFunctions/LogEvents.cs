using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Hadoop.Avro.Container;
using System.Collections.Generic;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights.DataContracts;

namespace ObservabilityFunctions
{
    public class LogEvents
    {
        private readonly TelemetryClient telemetryClient;

        /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
        public LogEvents(TelemetryConfiguration telemetryConfiguration)
        {
            this.telemetryClient = new TelemetryClient(telemetryConfiguration);
        }

        [FunctionName("LogEvents")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Function triggered");

            using (var reader = AvroContainer.CreateGenericReader(req.Body))
                while (reader.MoveNext())
                {
                    foreach (dynamic result in reader.Current.Objects)
                    {
                        log.LogInformation("Parsing object");
                        
                        // Pull out the EventId (or whatever unique identifier) each message has
                        string eventId = result.EventId;

                        // Log an event with Application Insights
                        this.telemetryClient.TrackEvent("Event Batched", new Dictionary<string, string>
                        {
                            { "EventId", eventId }
                        });
                    }
                }


            return new OkResult();
        }
    }
}
