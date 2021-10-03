Create a Scales3 project based on the Scales project.<br>
The Scales class must be parameterized by the StorageEngine - a way to store the items added to the scales.<br>
StorageEngine must implement the IStorageEngine interface with addItem (item), getItem (index), getCount () methods.<br>
Develop several classes with different storage methods:<br>
ScalesStorageEngineArray - for storage in Array <type>;<br>
ScalesStorageEngineLocalStorage - for storage in localStorage.<br>
Create several Scales with different storage methods, add several elements to each scale, display the result of the getSumScale and getNameList methods to the console.<br>

Do not divide products into apples / tomatoes, just work with the Product class.<br>
Neither the scales themselves, nor the storage engines need to be parameterized by what exactly is stored in them, to "hardcode" what exactly the Product is stored in.<br>
Do not use public properties in the Product class, only public methods.