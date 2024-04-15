To run backend:

`cd api`

`uvicorn main:app --reload`

To run frontend:

`cd ui`

`npm install .`

`npm start`

I was not able to finish the deployment process for the website. As such, the local version displays mock data for the authors. 
The steps I would take to deploy on GCP are:
- Create Docker files for both the backend and frontend
- Deploy each as separate artifacts and as separate cloud service runs. The cloud service run for the api would include a connection to a Cloud SQL instance. 
- Create a Cloud SQL instance for both the backend
- Deploy both as separate containers, and store the API url as an environment variable on the frontend container.

With this deployment process, I would also create the mock data for the database and correctly return this data rather than the mock data being returned by the endpoint. 
