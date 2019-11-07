# Observability Azure Functions

## LogEvents

The log event function is intended to be triggered at the start of the logic app.

It will parse the blob which the logic app was triggered on, deserializing it and then logging an event into application insights for each unique event/message that was captured in the blob.

### Requirements

An `APPINSIGHTS_INSTRUMENTATIONKEY` environment variable must be set to the application insights instrumentation key.