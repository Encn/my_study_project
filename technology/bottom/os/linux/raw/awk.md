@@ -0,0 +1,19 @@
basic format

```
awk '/search_pattern/ { action_to_take_on_matches; another_actions; }' file_to_parse
```

eg:

awk '{print}' /etc/test.txt

awk '/^UUID/' /etc/test.txt

awk '/^UUID/ {print $1;}' /etc/test.txt

We can reference every column (as delimited by whitespace) by variables associated with their column number. The first column can be referenced by $1 for instance. The entire line can by referenced by $0.

ps -ax | awk '{ print $1 }'

ps -ax | awk '{ print $1 }' | grep -e "^${pid}$"🚫
