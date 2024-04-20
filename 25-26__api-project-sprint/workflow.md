#  Workflow Strategy

Below is a simplified workflow strategy for developing your applicaiton:

1. Develop a feature locally (i.e. spots: models, migration, seeder)

2. Test the feature locally

3. Push the feature to Render

4. Test the feature on Render

5. Move to the next feature

Note, you could modularize every mode, migration, and seeder.  Essentially building all of your DB tables, and having them seeded.

After the db tables are created and seeded on Render, you could follow the 5 steps above for routes for each feature. 
