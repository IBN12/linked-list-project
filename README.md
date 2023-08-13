# Linked List Project
## The Odin Project

### Definition:
A linked list can be described as a linear data structure. This means they are constructed in linear traversed order.
The linked list consist of a head node, central nodes, and a tail node. These nodes are known as data elements and hold 
two fields. One field has data, and the second field has an address that keeps a reference to the next node. The head
node will point to the first node element, and the tail node is the last node that points to null as its reference. 
You can traverse through the nodes sequentially by following a logical order or sequence. 

### Assignment:
The project will contain two classes or factories:
1. <b>Linked List</b> - class / factory, which will represent the full list.
2. <b>Node Class</b> - class / factory, containing a value property and a link to the 
nextNode, set both as null by default. 

The project will contain the following functions in the linked list class:
1. <b>append(value)</b> - adds a new containing value to the end of the list.
2. <b>prepend(value)</b> - adds a new containing value to the start of the list. 
3. <b>size</b> - returns the total number of nodes in the list.
4. <b>head</b> - returns the first node in the list.
5. <b>tail</b> - returns the last node in the list.
6. <b>at(index)</b> - returns the node at the given index.
7. <b>pop</b> - removes the last element from the list.
8. <b>contains(value)</b> - returns true if the passed in value is in the list and
otherwise returns false.
9. <b>find(value)</b> - returns the index of the node containing value, or null if not
found.
10. <b>toString</b> - represents your LinkedList objects as strings, so you can print
them out and preview them in the console. The format should be: 
<b>( value ) => ( value ) => ( value ) => null</b>

### Extra Credit:
1. <b>insertAt(value, index)</b> - that inserts a new node the provided value
at the given index.
2. <b>removeAt(index)</b> - that removes node at the given index. 

