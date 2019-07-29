require("dotenv").config();

async function publishMessage(topicName = "temperature-sensor", temp = null) {
  // [START pubsub_publish]
  // [START pubsub_quickstart_publisher]
  // Imports the Google Cloud client library
  const { PubSub } = require("@google-cloud/pubsub");

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // generates random numbers in the range from 0 to 30
  const randomTemp = temp ? temp : Number(Math.random() * 30).toFixed(2);
  const data = JSON.stringify({ temperature: `${randomTemp}` });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const messageId = await pubsub.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);
  console.log(data);

  // [END pubsub_publish]
  // [END pubsub_quickstart_publisher]
}

publishMessage("temperature-sensor").catch(erro => {
  console.log("Erro captured:" + erro);
});
