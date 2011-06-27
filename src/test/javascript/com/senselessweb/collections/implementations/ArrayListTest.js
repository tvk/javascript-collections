
describe('ArrayList', function() {
	
	/**
	 * An empty ArrayList that is resetted before each test
	 */
	var myList;
	
	/**
	 * An array of three test elements
	 */
	var testelements;
	
	beforeEach(function () {
		myList = new ArrayList();
		testelements = new Array("element1", "element2", "element3", "element4");
	});
	
	it('should be of type List', function() {
		expect(myList instanceof List).toBe(true);
	});
	
	it('should be empty at the beginning', function() {
		expect(myList.isEmpty()).toBe(true);
	});
	
	it('should contain all elements that have been given in the constructor', function() {
		var list1 = new ArrayList(testelements);
		expect(list1.size()).toBe(4);
		var list2 = new ArrayList(list1);
		expect(list2.size()).toBe(4);
		expect(list2.get(2)).toBe('element3');
	});
	
	it('should contain one element when an element is added', function() {
		myList.add("myElement");
		expect(myList.size()).toBe(1);
	});
	
	it('should add an element at the correct position', function() {
		myList.addAll(testelements);
		myList.add("myNewElement", 2);
		alert(myList.elements.length);
		alert(myList.elements[0]);
		alert(myList.elements[1]);
		alert(myList.elements[2]);
		alert(myList.elements);
		expect(myList.equals(new ArrayList(new Array('element1', 'element2', 'myNewElement', 'element3', 'element4')))).toBe(true);
	});
	
	it('should contain all added elements', function() {
		myList.addAll(testelements);
		expect(myList.size()).toBe(4);
		expect(myList.containsAll(testelements)).toBe(true);
	});
	
	it('should fail if an element at an invalid position is requested', function() {
		myList.add("myElement");
		expect(function() { myList.get( 5); }).toThrow();
		expect(function() { myList.get(-1); }).toThrow();		
	});
	
	it('should return an element that has been added', function() {
		myList.add("myElement");
		expect(myList.get(0)).toBe("myElement");
	});
	
	it('should fail if an element at an invalid position should be inserted', function() {
		myList.add("myElement");
		expect(function() { myList.add('myElement',  2); }).toThrow();
		expect(function() { myList.add('myElement', -1); }).toThrow();		
	});

	it('should be empty after clear has been called', function() {
		myList.add("myElement");
		expect(myList.size()).toBe(1);
		myList.clear();
		expect(myList.size()).toBe(0);		
	});

	it('should return true if an element has been added and contains is called (and false otherwise)', function() {
		myList.add("myElement")
		expect(myList.contains("myElement")).toBe(true);
		expect(myList.contains("notMyElement")).toBe(false);
	});
	
	it('should be equal to another collection with the same elements', function() {
		myList.addAll(testelements);
		var secondList = new ArrayList(testelements);
		expect(myList.equals(secondList)).toBe(true);
	});
	
	it('should not be equal to another collection with the same elements in a different order', function() {
		myList.addAll(testelements);
		var secondList = new ArrayList(testelements.reverse());
		expect(myList.equals(secondList)).toBe(false);
	});
	
	it('should contain the correct elements if removeAll is called', function() {
		myList.addAll(testelements);
		var elementsToRemove = new Array('element2', 'element4');
		myList.removeAll(elementsToRemove);
		var elementsLeft = new Array('element1', 'element3');
		expect(myList.equals(new ArrayList(elementsLeft))).toBe(true);
	});
	
	it('should return the correct values for indexOf and lastIndexOf', function() {
		var list = new ArrayList(new Array('element1', 'element2','element1', 'element2'));
		expect(list.indexOf('element2')).toBe(1);
		expect(list.lastIndexOf('element1')).toBe(2);
	});
	
	it('should contain the correct elements if remove is called', function() {
		myList.addAll(testelements);
		myList.remove(1);
		expect(myList.equals(new ArrayList(new Array('element1', 'element3', 'element4')))).toBe(true);
	});
		
	it('should retain the correct elements if retain is called', function() {
		myList.addAll(testelements);
		var elementsToRetain = new Array('element1', 'element3');
		myList.retainAll(elementsToRetain);
		expect(myList.equals(new ArrayList(elementsToRetain))).toBe(true);
	});

	it('should replace the correct element when set is called', function() {
		myList.addAll(testelements);
		myList.set(2, "myNewElement")
		expect(myList.equals(new ArrayList(new Array('element1', 'element2', 'myNewElement', 'element4')))).toBe(true);
	});

	it('should return the correct elements when subList is called', function() {
		myList.addAll(testelements);
		expect(myList.subList(1, 3).equals(new ArrayList(new Array('element2', 'element3')))).toBe(true);
		expect(myList.subList(0, 3).equals(new ArrayList(new Array('element1', 'element2', 'element3')))).toBe(true);
		expect(myList.subList(1, 4).equals(new ArrayList(new Array('element2', 'element3', 'element4')))).toBe(true);
		
		expect(function() { myList.subList(-1, 4); }).toThrow();		
		expect(function() { myList.subList(1, 29); }).toThrow();		
		expect(function() { myList.subList(3, 2); }).toThrow();		
	});
		
});