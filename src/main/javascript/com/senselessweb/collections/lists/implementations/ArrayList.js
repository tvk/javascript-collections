
ArrayList.prototype = new List();
ArrayList.prototype.constructor = ArrayList;

var elements;

/**
 * Creates a new ArrayList
 * 
 * @param collection The collection whose elements are to be placed 
 * into this list. Collections and javascript arrays are supported. If
 * undefined, an empty list is constructed. 
 * 
 * @class ArrayList
 * @constructor
 */
function ArrayList(collection)
{
	if (collection != undefined)
	{
		if (collection instanceof Array)
			this.elements = collection;
		else if (collection instanceof Collection)
			this.elements = collection.toArray();
		else throw 'Cannot handle collection \"' + collection + '\"';
	}
	else 
	{
		this.elements = new Array();
	}
}

/**
 * @see Collection#add 
 */
ArrayList.prototype.add = function(element, index)
{
	if (index < 0 || index > this.size()) throw new Error(
			'The given index \"' + index + '\" is out of range');
	
	if (index == undefined || index == this.size()) 
	{
		this.elements.push(element);
	}
	else if (index == 0)
	{
		this.elements.unshift(element);
	}
	else 
	{
		var newElements = new Array();
		for (var i = 0; i < this.elements.length; i++)
		{
			if (i == index) newElements.push(element);
			newElements.push(this.elements[i]);
		}
		this.elements = newElements;
	}
}

/**
 * @see Collection#clear
 */
ArrayList.prototype.clear = function()
{
	this.elements = new Array();
}

/**
 * @see Collection#removeElement
 */
ArrayList.prototype.removeElement = function(element)
{
	for (var i = 0; i < this.size(); i++)
	{
		if (this.get(i) == element) 
		{
			this.elements.splice(i, 1);
		}
	}	
}

/**
 * @see Collection#size
 */
ArrayList.prototype.size = function()
{
	return this.elements.length;
}

/**
 * @see List#get
 */
ArrayList.prototype.get = function(index)
{
	if (index < 0 || index > this.size()) throw new Error(
			'The given index \"' + index + '\" is out of range');
	
	return this.elements[index];
}

/**
 * @see List#remove
 */
ArrayList.prototype.remove = function(index)
{
	if (index < 0 || index > this.size()) throw new Error(
			'The given index \"' + index + '\" is out of range');
	
	this.elements.splice(index, 1);
}


