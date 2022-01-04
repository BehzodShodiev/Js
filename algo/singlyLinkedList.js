function Node(element) {
  this.element = element;
  this.next = null;
}
function LinkedList() {
  let length = 0;
  let head = null;

  this.push = function (element) {
    const node = new Node(element);
    if (!head) {
      head = node;
      length++;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      length++;
    }
  };

  // Start
  this.insert = function (index, element) {
      if (index < 0) return "Element cannot be added";
      if (head[index]) {
          this.push(element);
      }    
      return element;
  };
  // End

  this.check = function () {
    const sol = [];
    let current = head;
    while (current) {
      sol.push(current.element);
      current = current.next;
    }
    return sol.join("");
  };
}
