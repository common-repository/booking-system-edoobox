# Templating Engine

edbs Micro Templating Engine

This engine simply replaces the variables that are put
in double curly braces "{{ var }}" with the corresponding
variables that are passed to it.

In the case of /v1/offers you can look up all the returned
variables from the API in the edoobox documentation:
https://docs.edoobox.com/knowledge-base/angeboteressourcen-rest-api/

So for example outputting the 'name' variable is as simple as
typing {{ name }}.
Beware that {{name}} will not work, since the engine
is whitespace sensitive.

## Where Is The Custom Template?

The custom template is actually saved in the wordpress next options array
with the key 'textarea', since this is the (input-)field
the custom template is saved from.
Editing it is best done via the backend.

### Editing The .html File

As an alternative you can edit the default template (./views/shortcode_next.html)
and disable the custom template in the backend. This may give you slightly
more freedom, since this code is not escaped the same way,
because it is not saved to the database.

Beware that these changed files WILL NOT PERSIST after an update!
So you may want to bump the booking-system-edoobox.php file in the root folder to
a high version to not accidentally trigger an update.