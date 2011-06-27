

/**
 * Abstract superclass for all classes of type collection
 * 
 * @see List
 * @see Set
 * 
 * @class Collection
 */
function Collection() { }


/**
 * Inserts the specified element at the specified position in this collection.
 * 
 * @param element The element to insert.
 * @param index The position where the element is to insert. If no index is 
 * given, the new element will be appended to the end of the collection. 
 */
Collection.prototype.add = function(element, index)
{
	throw 'Unsupported operation';
}

/**
 * Inserts all of the elements in the specified collection at the specified position in this collection.
 * 
 * @param collection The collection to insert. Collections and javascript arrays are supported.
 * @param index The position where the element is to insert. If no index is given, the new element will 
 * be appended to the end of the collection. Note that not all collections support an index. If it is 
 * not supported, it is ignored.  
 */
Collection.prototype.addAll = function(collection, index)
{
	var asList = new ArrayList(collection);
	for (var i = 0; i < asList.size(); i++)
	{
		this.add(asList.get(i), index);
	}
}

/**
 * Removes all of the elements from this collection.
 */
Collection.prototype.clear = function()
{
	throw 'Unsupported operation';
}

/**
 * Returns true if this collection contains the specified element.
 * 
 * @param element The element.
 * 
 * @return True if this collection contains the specified element.
 */
Collection.prototype.contains = function(element)
{
	for (var i = 0; i < this.size(); i++)
	{
		if (element == this.get(i)) return true;
	}
	return false;
}

/**
 * Returns true if this collection contains all of the elements of the specified collection.
 * 
 * @param collection The collection.
 * 
 * @return True if this collection contains all of the elements of the specified collection.
 */
Collection.prototype.containsAll = function(collection)
{
	var asList = new ArrayList(collection);
	for (var i = asList.size() - 1; i >= 0; i--)
	{
		if (!this.contains(asList.get(i))) return false;
	}
	return true;
}

/**
 * Compares the specified object with this collection for equality.
 * 
 * @return True if the specified object is equal to this collection.
 */
Collection.prototype.equals = function(object)
{
	throw 'Unsupported operation';	
}

/**
 * Returns true if this collection contains no elements.
 * 
 * @return True if this collection contains no elements.
 */
Collection.prototype.isEmpty = function()
{
	return this.size() == 0;
}

/**
 * Removes a single instance of the specified element from this 
 * collection, if it is present.
 */
Collection.prototype.removeElement = function(element)
{
	throw 'Unsupported operation';	
}

/**
 * Removes all this collection's elements that are also 
 * contained in the specified collection
 */
Collection.prototype.removeAll = function(collection)
{
	var asList = new ArrayList(collection);
	for (var i = 0; i < asList.size(); i++)
	{
		this.removeElement(asList.get(i));
	}
}

/**
 * Returns the number of elements in this collection.
 * 
 * @return The number of elements in this collection.
 */
Collection.prototype.size = function()
{
	throw 'Unsupported operation';	
}

/**
 * Returns an array containing all of the elements in this collection.
 * 
 * @return An array containing all of the elements in this collection.
 */
Collection.prototype.toArray = function()
{
	var array = new Array();
	for (var i = 0; i < this.size(); i++)
	{
		array.push(this.get(i));
	}
	return array;
}

