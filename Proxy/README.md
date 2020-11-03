<h2>Proxy Pattern</h2>

<h4>Definition</h4>
<p>
  Proxy provides a placeholder for another object in order to control the access of it. Which means ththat instead of calling the direct object you call the image/proxy/placeholder of the object, this proxy calls the object we want to call. This pattern is like the decorator pattern, they involve the callof another object instead of the main object, but decorator adds more information to the object.
</p>

<p>
  <b>
  Note: We use proxy when we want to control the access to object. Proxy just works with access, it works very well in areas like security and caching.
  </b>
<p>

<h4>Types of proxy</h4>
<ul>
  <li>
      Remote proxy: The remote proxy works when the object you want to communicate is distant
      like a server for example. You have a proxy that communicates with a distant object and returns the response, or things you need. 
  </li>

  <li>
      Virtual Proxy: The virtual proxy controls access to a resource that is expensive to create. The virtual proxy creates this "image" in front in something so that when you interact with it this 	  image in the one who acts. 	 
  </li>

  <li>
      Protection Proxy: A good example of the protection proxy is an access management system. 
      Protection Proxy verifies that users for example are the ones who access specific information; 
      in short words, "access rights". If you are allowed to access an object you will have an access,
      if not well the access is prohibited.
  </li>
</ul>
<hr>

<h3>
   We will be working with a JSON API call, in this case the specific proxy type will be the Remote proxy. But i will be adding more examples using the Virtual and Protection Proxy
</h3>
