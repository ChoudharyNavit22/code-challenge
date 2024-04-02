1) Would your solution change if you needed to parse 1 million plus records?

Yes depending upon the needs of the data to be parsed the solution could definitely be changed. Things that would be changed:

- a more optimized for loop instead of a forEach would considerably decrease the time consumed for 1 million records as the loop would be running in a more controlled environment. Though the negitive aspect of that would be the readability of the code as we would be giving up on that to make the code more optimized.

- Second we could also use a better sorting mechanism to sort a large number of objects making it reduce the time fram for sorting.

2) How would you deploy this service?

The service could be deployed on the aws lambda and just be called when required. Benefits of deploying the service as lambda would be:

- No need to manage the server where the lambda would be deployed
- Auto-scalling: we could auto scale the lambda usage depending upon our user intake. 
- Pay as we go. Putting it on lambda would help us maintain our costs by just paying for the amount of the api that is being used and for the rest of the time the lambda would go into sleep saving us the cost of an ever runiing server.
- Performance Optimiztions

3) How would you change this service to allow founders to have their own custom rulesets?

The biggest thing that i would keep in mind when updating the service to handle custom rulesets is to create a module that works like a dictionary where the rulesets are parsed on various conditions and matched along the way to get a desired output. The modules sole responsibilyt would be to parse the condition for the rule sets and create a desirable output that could be then used as a weight for the the custom switch conition and hence provide a valuable result for our service.