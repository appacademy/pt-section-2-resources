# Dog Shelter App

Requirements

- I want to be able to find all shelters and see their location

SELECT locations FROM shelters;

- I want to be able to find all dogs and see what location they're shelter they're at.

SELECT shelters.location, dogs.name FROM dogs
JOIN shelters
ON dogs.shelter_id = shelters.id


- I want to be able to know what breed of dogs are at each shelter location.

SELECT shelters.location, dogs.breed FROM dogs
JOIN shelters
ON dogs.shelter_id = shelters.id


- I want to be able to remove an entire breed of dog for a specific shelter incase I want the shelter to be only for a single breed


DELETE FROM dogs
WHERE
    breed = 'golden retriever'
    AND shelter_id IN (
        SELECT
            id
        FROM
            shelters
        WHERE
            location IN ('Texas')
    );
