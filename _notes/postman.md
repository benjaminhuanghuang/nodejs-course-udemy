## Create environment variable



## Set Authorzation for collection
Set Authorzation for each request to "Inherit auth from parnet"


## Create auto script
```
if(pm.response.code === 200)
{
  pm.environment.set('authToken', pm.response.json().token)
}
```