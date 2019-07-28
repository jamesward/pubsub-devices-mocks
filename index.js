async function publishMessage(topicName, data) {
  // [START pubsub_publish]
  // [START pubsub_quickstart_publisher]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'temperature-sensor';
  // const data = JSON.stringify({ temp: '10deg' });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const messageId = await pubsub.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);

  // [END pubsub_publish]
  // [END pubsub_quickstart_publisher]
}

publishMessage('temperature-sensor', { temp: '10deg' }).catch(erro =>{console.log('o que foi que houve : ' +erro)});