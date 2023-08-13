///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: Javascript.js
// Description: Main javascript file for the Linked List Project.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class NodeClass{
    constructor(nodeValue = null, nextNode = null)
    {
        this.nodeValue = nodeValue;
        this.nextNode = nextNode;
    }
}

class LinkedList{
    constructor(head = null, tail = null)
    {
        this.head = head;
        this.tail = tail;
    }

    prepend = (value) => {
        if (this.head === null)
        {
            this.head = new NodeClass(value);
        }
        else
        {
            let prevHead = this.head;
            this.head = new NodeClass(value, prevHead);
        }
    }

    append = (value) => {
        if (this.head === null)
        {
            console.log("Head is null, prepend or append first.");
            return;
        }
        else
        {
            let current = this.head;

            while (current.nextNode !== null)
            {
                current = current.nextNode;
            }

            current.nextNode = new NodeClass(value);
        }
    }

    size = () => {
        if (this.head === null)
        {
            return 0;
        }

        let current = this.head;
        let size = 1;

        while (current.nextNode !== null)
        {
            size++;
            current = current.nextNode;
        }

        return size;
    }

    at = (index) => {
        if (this.head === null)
        {
            console.log("Head is null, prepend and append first.");
            return;
        }
        else 
        {
            if (index === 0)
            {
                return this.head;
            }

            let current = this.head;
            let stop = false;
            let found = false;
            let matchIndex = 0;

            while (!stop)
            {
                if (index === matchIndex)
                {
                    found = true;
                    stop = true;
                }

                if (!stop)
                {
                    current = current.nextNode;
                    matchIndex++;
                }

                if (index > this.size() - 1)
                {
                    stop = true;
                }
            }

            if (found)
            {
                return current;
            }
            else 
            {
                return "Index not found";
            }
        }
    }

    pop = () => {
        if (this.head === null)
        {
            console.log("Head is null, prepend or append first.");
            return;
        }
        else
        {
            let current = this.head;
            let previous = null;
            let stop = false;

            while (!stop)
            {
                if (current.nextNode === null)
                {
                    previous.nextNode = null;
                    current = previous;
                    stop = true;
                }

                if (!stop)
                {
                    previous = current;
                    current = current.nextNode;
                }
            }
        }
    }

    contains = (value) => {
        if (this.head === null)
        {
            console.log("Head is null, prepend or append first.");
            return;
        }
        else
        {
            let current = this.head;
            let stop = false;
            let found = false;

            while (!stop)
            {
                if (value === current.nodeValue)
                {
                    stop = true;
                    found = true;
                }

                if (current.nextNode === null)
                {
                    stop = true;
                }

                if (!stop)
                {
                    current = current.nextNode;
                }
            }

            if (found)
            {
                return found;
            }
            else
            {
                return found;
            }
        }
    }

    find = (value) => {
        if (this.head === null)
        {
            console.log("Head is null, prepend or append first.");
            return; 
        }
        else
        {
            let current = this.head;
            let stop = false;
            let found = false;
            let index = 0;

            while (!stop)
            {
                if (value === current.nodeValue)
                {
                    found = true;
                    stop = true;
                }

                if (current.nextNode === null)
                {
                    stop = true;
                }

                if (!stop)
                {
                    current = current.nextNode;
                    index++;
                }
            }

            if (found)
            {
                return index;
            }
            else
            {
                return null;
            }
        }
    }

    insertAt = (value, index) => {
        if (this.head === null)
        {
            console.log("Head is null, append or prepend first.");
            return;
        }
        else
        {
            // First new node added to the first index.
            if (index === 0)
            {
                this.head = new NodeClass(value, this.head.nextNode);
                return;
            }

            // Append value if index equals the size of the linked list.
            if (index === this.size())
            {
                this.append(value);
                return; 
            }

            if (index > this.size())
            {
                console.log("Index is out of range.");
                return;
            }

            let current = this.head;
            let stop = false;
            let previous = null;
            let matchIndex = 0;

            while (!stop)
            {
                if (index === matchIndex)
                {
                    current = new NodeClass(value, current.nextNode);
                    previous.nextNode = current;
                    stop = true;
                }

                if (!stop)
                {
                    previous = current;
                    current = current.nextNode;
                    matchIndex++;
                }
            }
        }
    }

    removeAt = (index) =>{
        if (this.head === null)
        {
            console.log("Head is null, prepend or append first.");
            return;
        }
        else
        {
            if (index === 0)
            {
                this.head = this.head.nextNode;
                return;
            }

            if (index > this.size() - 1)
            {
                console.log("Index is out of range.");
                return;
            }

            let current = this.head;
            let stop = false;
            let previous = null;
            let matchIndex = 0;

            while (!stop)
            {
                if(index === matchIndex)
                {
                    previous.nextNode = current.nextNode;
                    stop = true;
                }

                if (!stop)
                {
                    previous = current;
                    current = current.nextNode;
                    matchIndex++;
                }
            }
        }
    }

    getTail = () => {
        if (this.head === null)
        {
            console.log("Head is null, prepend or append first.");
            return;
        }
        else
        {
            let current = this.head;
            let stop = false;

            while (!stop)
            {
                if (current.nextNode === null)
                {
                    this.tail = current;
                    stop = true;
                }   

                if (!stop)
                {
                    current = current.nextNode;
                }
            }
        }
    }

    toString = () => {
        if (this.head === null)
        {
            console.log("Head is null, prepend or append first.");
            return;
        }

        let current = this.head;
        let str = "";
        let stop = false;

        while (!stop)
        {
            if (current.nextNode === null)
            {
                stop = true;
            }

            str += `( ${current.nodeValue} ) -> `

            if (!stop)
            {
                current = current.nextNode;
            }
        }

        return console.log(str); 
    }
}

const myLinkedList = new LinkedList();
myLinkedList.prepend("0000");
myLinkedList.prepend("2222");
myLinkedList.append("1111");
myLinkedList.append("3333");
myLinkedList.append("4444");
myLinkedList.append("3232");
myLinkedList.append("4242");

console.log("Displaying data in the linked list:");
myLinkedList.toString();
console.log("\n");

console.log("Total number of nodes in the linked list:");
console.log(myLinkedList.size());
console.log("\n");

console.log("Returns the node at a given index");
console.log("index 0: ", myLinkedList.at(0));
console.log("index 3: ", myLinkedList.at(3));
console.log("index 6: ", myLinkedList.at(6));
console.log("index 8: ", myLinkedList.at(8));
console.log("\n");

console.log("Remove the last element from the list:");
myLinkedList.pop();
myLinkedList.toString();
console.log("\n");

console.log("Returns true if the value passed in is found: ");
console.log("Value 4444: ", myLinkedList.contains("4444"));
console.log("Value 0000: ", myLinkedList.contains("0000"));
console.log("Value 9999: ", myLinkedList.contains("9999"));
console.log("\n");

console.log("Returns the index of the node containing the value, or null if not found:");
console.log("Value 4444: ", myLinkedList.find("4444"));
console.log("Value 1111: ", myLinkedList.find("1111"));
console.log("Value 1212: ", myLinkedList.find("1212"));
console.log("\n");

console.log("The size of linked list: ");
console.log(myLinkedList.size());
console.log("\n");

console.log("Insert a new node with the provided value 7070 at the given index 6:");
myLinkedList.insertAt("7070", 6);
myLinkedList.toString();
console.log("\n");

console.log("Insert a new node with the provided value 8080 at the given index 3:");
myLinkedList.insertAt("8080", 3);
myLinkedList.toString();
console.log("\n");

console.log("Insert a new node with the provided value 8081 at the given index 7:");
myLinkedList.insertAt("8081", 8);
console.log("\n");

console.log("Insert a new node with the provided value 9999 at the given index 0:");
myLinkedList.insertAt("9999", 0);
myLinkedList.toString();
console.log("\n");

console.log("Insert a new node with the provided value 7272 at the given index 4:");
myLinkedList.insertAt("7272", 4);
myLinkedList.toString();
console.log("\n");

console.log("Remove the node at the given index 1:");
myLinkedList.removeAt(1);
myLinkedList.toString();
console.log("\n");

console.log("Remove the node at the given index 0:");
myLinkedList.removeAt(0);
myLinkedList.toString();
console.log("\n");

console.log("Remove the node at the given index 5:");
myLinkedList.removeAt(5);
console.log("\n");

console.log("The head of the linked list:");
console.log(myLinkedList.head);
console.log("\n");

console.log("The tail of the linked list.");
myLinkedList.getTail();
console.log(myLinkedList.tail);
console.log("\n");