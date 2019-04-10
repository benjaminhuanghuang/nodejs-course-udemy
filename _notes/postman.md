## Create environment variable
- url
- authToken


## Set Authorzation for collection

Edit Collection -> Authorzation -> Set type to "Bearer Token" -> Fill "{{authToken}}" to Token field 

Set Authorzation for each request to "Inherit auth from parnet"


## Create auto script to set authToken variable
Add tests script to lon in request
```
if(pm.response.code === 200)
{
  pm.environment.set('authToken', pm.response.json().token)
}
```