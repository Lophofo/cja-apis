(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2554],{20647:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return h}});var t,r=a(22122),o=a(19756),i=(a(15007),a(64983)),s=a(99536),d=["components"],m={},l=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:m},u=s.Z;function h(e){var n=e.components,a=(0,o.Z)(e,d);return(0,i.mdx)(u,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"use-cja-api-with-python"},"Use CJA API with Python"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://www.python.org/"},"Python")," is a powerful and easy to learn programming language. It has several libraries that allow you to create API calls. This page uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://pypi.org/project/requests/"},(0,i.mdx)("inlineCode",{parentName:"a"},"requests"))," library to make API calls to Customer Journey Analytics."),(0,i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.mdx)("p",null,"Make sure that you meet all requirements on the ",(0,i.mdx)("a",{parentName:"p",href:"../getting-started/index.md"},"Getting started")," page, including:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Your user account belongs to the correct product profile in the ",(0,i.mdx)("a",{parentName:"li",href:"https://adminconsole.adobe.com"},"Adobe Admin Console")),(0,i.mdx)("li",{parentName:"ul"},"An API client created in the ",(0,i.mdx)("a",{parentName:"li",href:"https://console.adobe.io"},"Adobe I/O Console")),(0,i.mdx)("li",{parentName:"ul"},"You have generated a JWT (JSON Web Token), via the Service Account Integration or by your own script.")),(0,i.mdx)("h2",{id:"1-preparing-your-header"},"1. Preparing your header"),(0,i.mdx)("p",null,"Once you possess your token, you can prepare a header to realize the requests with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"requests")," module. In ",(0,i.mdx)("inlineCode",{parentName:"p"},"requests"),", the header is a dictionary, consisting of key value pairs. The CJA API requires 3 components on your header:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Your Token with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"authorization")," key and ",(0,i.mdx)("inlineCode",{parentName:"li"},'"Bearer "')," as a start."),(0,i.mdx)("li",{parentName:"ul"},"Your Organization ID with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"x-gw-ims-org-id")," key"),(0,i.mdx)("li",{parentName:"ul"},"Your client ID with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"x-api-key")," key.")),(0,i.mdx)("p",null,"For example, your dictionary would look similar to the following example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'myHeader = {\n    "x-gw-ims-org-id" : "EXAMPLE@AdobeOrg",\n    "x-api-key" : "example-client-id",\n    "authorization" : "Bearer example-authorization-value"\n}\n')),(0,i.mdx)("h2",{id:"2-sending-the-request"},"2. Sending the request"),(0,i.mdx)("p",null,"Once you have your header ready, you can start loading and using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"requests")," module. For example you can send a request to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"/aresconfig/users/me")," endpoint:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import requests\nres = requests.get("https://cja.adobe.io/aresconfig/users/me", headers=myHeader)\n')),(0,i.mdx)("h2",{id:"3-using-responses-from-the-cja-api"},"3. Using responses from the CJA API"),(0,i.mdx)("p",null,"Once you receive a response from Adobe, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},".json()")," method on it to return the data returned by the CJA API. In the above example, the response is captured in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"res")," variable. The below example uses this ",(0,i.mdx)("inlineCode",{parentName:"p"},"res")," variable to parse the response into a new variable."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"myData = res.json()\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"myData")," variable would contain a value similar to the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"{\n 'id': 'EXAMPLE@techacct.adobe.com',\n 'email': 'example@techacct.adobe.com',\n 'fullName': ''\n}\n")),(0,i.mdx)(l,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Your user is the JWT application itself if you use JWT to authenticate."),(0,i.mdx)("h2",{id:"other-use-cases"},"Other use-cases"),(0,i.mdx)("h3",{id:"sending-data-with-query-parameters"},"Sending data with query parameters"),(0,i.mdx)("p",null,"Query parameters are elements following the question mark in a URL. For example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"?param=value"),"."),(0,i.mdx)("p",null,"When requesting the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.io/cja-apis/docs/api/#operation/getDataViewsForCompany"},"data views for a company"),", you use the following path: ",(0,i.mdx)("inlineCode",{parentName:"p"},"/datagroups/dataviews"),". However, a normal request (",(0,i.mdx)("inlineCode",{parentName:"p"},'requests.get("https://cja.adobe.io/datagroups/dataviews",headers=myHeader)'),") only returns the following response:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"{\n  'content': [\n    {'id': 'dv_exampleid1'},\n    {'id': 'dv_exampleid2'},\n    {'id': 'dv_exampleid3'}\n   ],\n  'totalPages': 1,\n  'totalElements': 3,\n  'numberOfElements': 3,\n  'number': 0,\n  'firstPage': True,\n  'lastPage': True,\n  'sort': None,\n  'size': 10\n}\n")),(0,i.mdx)("p",null,"This is not typically useful as you miss some elements that easily identify the data view. If you use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"owner")," query parameters, you can retrieve more interesting information. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"parameters = {'expansion':'name,owner'}\nrequests.get(\"https://cja.adobe.io/datagroups/dataviews\", headers=myHeader, params=parameters)\n")),(0,i.mdx)("p",null,"Now the response contains additional information:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"{\n  'content': [{\n      'name': 'Web Call Example Data View',\n      'owner': {'imsUserId': 'EXAMPLE1@AdobeID', 'name': None},\n      'id': 'dv_exampleid1'\n    }, {\n      'name': 'All Datasets Example',\n      'owner': {'imsUserId': 'EXAMPLE2@AdobeID', 'name': None},\n      'id': 'dv_exampleid2'\n    }, {\n      'name': 'Example (default)',\n      'owner': {'imsUserId': 'EXAMPLE3@AdobeID', 'name': None},\n      'id': 'dv_exampleid3'\n    }\n  ],\n  'totalElements': 3,\n  'totalPages': 1,\n  'numberOfElements': 3,\n  'number': 0,\n  'firstPage': True,\n  'lastPage': True,\n  'sort': None,\n  'size': 10\n}\n")),(0,i.mdx)("h3",{id:"sending-data-in-the-body-of-the-request"},"Sending data in the body of the request"),(0,i.mdx)("p",null,"You can update or create a component by sending data in the body of a request. That type of API call is typically either a ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"PUT")," request."),(0,i.mdx)(l,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"PUT")," request completely overwrites the previous data held in the component. Excercise caution when editing components."),(0,i.mdx)("p",null,"Data sent to the Customer Journey Analytics API is typically through a python dictionary. The easiest method to send data is to stringify the JSON element via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"json")," module. You can use the following example to help format the body of your API call."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'creationDataView = {\n  "name": "string",\n  "description": "string",\n  "owner": {\n    "imsUserId": "string",\n    "name": "string"\n  },\n  "isDeleted": true,\n  "parentDataGroupId": "string",\n  "segmentList": [\n    "string"\n  ],\n  "currentTimezoneOffset": 0,\n  "timezoneDesignator": "string",\n  "modifiedDate": "YYYY-08-24T14:15:22Z",\n  "createdDate": "YYYY-08-24T14:15:22Z",\n  "organization": "string",\n  "modifiedBy": "string",\n  "curationEnabled": true,\n  "recentRecordedAccess": "YYYY-08-24",\n  "sessionDefinition": [{}],\n  "curatedComponents": [{}],\n  "externalData": {\n    "externalId": "string",\n    "externalParentId": "string"\n  },\n  "containerNames": {\n    "event": "string",\n    "session": "string",\n    "people": "string"\n  },\n  "id": "string"\n}\n')),(0,i.mdx)("p",null,"Once you have this definition established (",(0,i.mdx)("inlineCode",{parentName:"p"},"creationDataView")," in the above example), you can use it in an API call. The following example uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.io/cja-apis/docs/api/#operation/getDataViewsForCompany"},"Data view creation API")," and includes the above JSON object in its body:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import json\nresCreation = requests.post("https://cja.adobe.io/datagroups/dataviews", headers=myHeader, data=json.dumps(creationDataView))\n')),(0,i.mdx)("p",null,"The response from Adobe would looks similar to the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'resCreation.json()\n\n## Response from Adobe\n{\n  "name": "string",\n  "description": "string",\n  "owner": {\n    "imsUserId": "string",\n    "name": "string"\n    },\n  "isDeleted": true,\n  "parentDataGroupId": "string",\n  "segmentList": [\n    "string"\n  ],\n  "currentTimezoneOffset": 0,\n  "timezoneDesignator": "string",\n  "modifiedDate": "YYYY-08-24T14:15:22Z",\n  "createdDate": "YYYY-08-24T14:15:22Z",\n  "organization": "string",\n  "modifiedBy": "string",\n  "curationEnabled": true,\n  "recentRecordedAccess": "YYYY-08-24",\n  "sessionDefinition": [{}],\n  "curatedComponents": [{}],\n  "externalData": {\n    "externalId": "string",\n    "externalParentId": "string"\n    },\n  "containerNames": {\n    "event": "string",\n    "session": "string",\n    "people": "string"\n  },\n  "id": "string"\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-python-md-c24ae09a5d0f697c1a5c.js.map