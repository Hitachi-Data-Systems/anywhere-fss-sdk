# HCP Anywhere File Sync and Share Java SDK                                                                  
                                                                                                    
The HCP Anywhere File Sync and Share API is an API for connecting to HCP Anywhere. This Java SDK provides convenient access to the HCP Anywhere FSS API. 
                                                                                                    
In order to make calls to the sub APIs, you must acquire an AuthToken. An AuthToken can be acquired from the server by calling the authenticate method, which requires you to provide the username and password or certificate you use to access HCP Anywhere. The returned AuthToken can be saved for later use.
                                                                                                    
Once an AuthToken is acquired, you can make calls to the sub APIs by supplying the token and any other required arguments of the sub APIs.


# Documentation 

Javadoc is available as a JAR via Maven Central or [via github](http://hitachi-data-systems.github.io/anywhere-fss-sdk/javadoc/).

File Sync and Share API documentation is available from the HCP Anywhere Management Console or [via github](http://hitachi-data-systems.github.io/anywhere-fss-sdk/fss-api-doc/)

## Example                                                                                          
                                            
```
AnywhereAPI api = new AnywhereAPI.Builder("https://myanywhere.example.com/").build();
AuthToken authToken = api.authenticate("jdoe", "passwd");
User me = api.getUserAPI().getInfo(authToken);
```

A complete example is provided in the repository under /example.

## Using the HCP Anywhere File Sync and Share SDK                                                       

The SDK is availble at [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22com.hds.hcpaw%22%20AND%20a%3A%22anywhere-fss-sdk%22).

### Maven Pom
```
<dependency>
  <groupId>com.hds.hcpaw</groupId>
  <artifactId>anywhere-fss-sdk</artifactId>
  <version>4.6.0.43</version>
</dependency>
```

### Gradle
```
dependencies 
    compile 'com.hds.hcpaw:anywhere-fss-sdk:4.6.0.43'
}
```

# Questions?

Reach out to Hitachi Vantara at our community portal http://community.hitachivantara.com.

# Copyright and License

Code and documentation copyright by Hitachi Vantara LLC 2021. All Rights Reserved.  Release under [the Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0).
