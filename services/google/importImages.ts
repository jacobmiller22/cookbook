const { AutoMlClient } = require("@google-cloud/automl").v1;

const projectId = "cookbook-318015";
const location = "us-central1";
const datasetId = "cookbook-318015";
const path = "gs://cookbook_training_data_1/";

const importImages = async () => {
  const mlClient = new AutoMlClient();

  async function importDataset() {
    // Construct request
    const request = {
      name: mlClient.datasetPath(projectId, location, datasetId),
      inputConfig: {
        gcsSource: {
          inputUris: path.split(","),
        },
      },
    };

    // Import dataset
    console.log("Proccessing import");
    const [operation] = await mlClient.importData(request);

    // Wait for operation to complete.
    const [response] = await operation.promise();
    console.log(`Dataset imported: ${response}`);
  }

  importDataset();
};

export default importImages;
