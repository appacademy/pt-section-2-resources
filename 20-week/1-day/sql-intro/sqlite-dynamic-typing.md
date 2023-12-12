# SQLite Data

SQLite uses something called dynamic typing. This means that we don't use all the usual sql data types. Its important to note sqlite will convert the data types if we do use them. For example VARCHAR will be converted to TEXT by sqlite.

## DATA TYPES

**NULL:** The value is a NULL value.

**INTEGER:** The value is a signed integer, stored in 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value.

**REAL:** The value is a floating-point value, stored as an 8-byte IEEE floating-point number.

**TEXT:** The value is a text string, stored using the database encoding (UTF-8, UTF-16BE, or UTF-16LE).

**BLOB:** The value is a blob of data, stored exactly as it was input.

## Conversions / Conventions

SQLite does not have a separate boolean, date, or time type. Instead it uses the following conventions:

-   Boolean values are stored as integers 0 (false) and 1 (true).
-   Date and time values are stored as text in the ISO-8601 format (YYYY-MM-DD HH:MM:SS.SSS), as real numbers (Julian day numbers), or as integers (Unix Time, the number of seconds since 1970-01-01 00:00:00 UTC).

You can still use the type names from SQL such as CHAR VARCHAR etc but will have the following conversion:

-   Columns defined as CHAR, VARCHAR, TEXT, etc., will use the TEXT storage class.
-   Columns defined as DECIMAL, NUMERIC, BOOLEAN, DATE, DATETIME, etc., will usually be mapped to TEXT or REAL, depending on their content.
