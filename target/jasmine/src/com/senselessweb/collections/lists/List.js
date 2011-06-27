
List.prototype = new Collection();
List.prototype.constructor = Collection;


/**
 * Abstract superclass for all classes of type list
 * 
 * @class List
 */
function List() { }


/**
 * @see Collection#equals
 */
List.prototype.equals = function(object)
{
	if (object == undefined || !(object instanceof List)) return false;	
	if (object.size() != this.size()) return false;
	for (var i = 0; i < this.size(); i++)
	{
		if (this.get(i) != object.get(i)) return false;
	}
	return true;
}

/**
 * Returns the element at the specified position in this list.
 * 
 * @param index The index.
 * 
 * @return The element at the specified position in this list.
 */
List.prototype.get = function(index)
{
	throw 'Unsupported operation';	
}

/**
 * Returns the index in this list of the first occurrence of the 
 * specified element, or -1 if this list does not contain this element.
 * 
 * @param element The element.
 * 
 * @return The index in this list of the first occurrence of the 
 * specified element, or -1 if this list does not contain this element.
 */
List.prototype.indexOf = function(element)
{
	for (var i = 0; i < this.size(); i++)
	{
		if (this.get(i) == element) return i;
	}
	return -1;
}

/**
 * Returns the last index in this list of the first occurrence of the 
 * specified element, or -1 if this list does not contain this element.
 * 
 * @param element The element.
 * 
 * @return The last index in this list of the first occurrence of the 
 * specified element, or -1 if this list does not contain this element.
 */
List.prototype.lastIndexOf = function(element)
{
	for (var i = this.size() - 1; i >= 0; i--)
	{
		if (this.get(i) == element) return i;
	}
	return -1;
}

/**
 * Removes the element at the specified position in this list.
 * 
 * @param index The index.
 */
List.prototype.remove = function(index)
{
	throw 'Unsupported operation';	
}

/**
 * Retains only the elements in this list that are contained in the specified collection.
 * 
 * @param collection The elements to retain.
 */
List.prototype.retainAll = function(collection)
{
	var asList = new ArrayList(collection);
	for (var i = 0; i < this.size(); i++)
	{
		if (!asList.contains(this.get(i))) this.remove(i);
	}
}

/**
 * Replaces the element at the specified position in this list 
 * with the specified element.
 * 
 * @param index The index.
 * @param element The element.
 */
List.prototype.set = function(index, element)
{
	if (index < 0 || index > this.size()) throw new Error(
			'The given index \"' + index + '\" is out of range');
	
	this.remove(index);
	this.add(element, index);
}

/**
 * Returns a view of the portion of this list between the specified 
 * fromIndex, inclusive, and toIndex, exclusive.
 * 
 * @param fromIndex The low endpoint (inclusive) of the subList.
 * @param toIndex The high endpoint (exclusive) of the subList. 
 */
List.prototype.subList = function(fromIndex, toIndex)
{
	if (fromIndex < 0) throw new Error('The fromIndex must not be lower than zero');
	if (toIndex > this.size()) throw new Error('The toIndex must not be greater than or eqal the size of this collection');
	if (fromIndex > toIndex) throw new Error('The fromIndex must not be greater than the toIndex');
	
	var subList = new ArrayList();
	for (var i = fromIndex; i < toIndex; i++) subList.add(this.get(i));
	return subList;
}

