# SQL Data Types

## Integer Types:

**INTEGER:** A whole number, with or without a sign. The size can vary depending on the value.

## Real/Float Types:

**REAL:** A floating-point value.

FLOAT: Synonymous with REAL in many databases, but can be treated differently in some systems.

## Text/String Types:

**TEXT:** A text string. SQLite3 stores text based on the database encoding (UTF-8, UTF-16BE, or UTF-16LE).

## Blob (Binary Large Object):

**BLOB:** A blob of data, stored exactly as it was input.

## Date and Time Types:

**DATE:** Stores date values.

**TIME:** Stores time values.

**DATETIME:** Stores both date and time values.

**TIMESTAMP:** Stores a date and time value; often used for recording when a row was created or updated.

## Boolean Type:

**BOOLEAN:** Represents true/false values. In SQLite, BOOLEAN values are stored as integers 0 (false) and 1 (true).

## Other Numeric Types:

**NUMERIC:** A numeric data type that can store exact numbers, often used for currency. Behavior can vary depending on the database.

**DECIMAL:** Similar to NUMERIC, used for exact numeric values with a fixed decimal point.
