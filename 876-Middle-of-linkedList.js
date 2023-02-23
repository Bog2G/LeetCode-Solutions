var middleNode = function (head) {
  let current = head;
  let count = 0;
  while (current) {
    current = current.next;
    count++;
  }
  console.log(count);
  current = head;
  if (count % 2 == 0) {
    for (let i = 0; i < count / 2; i++) {
      current = current.next;
    }
    return current;
  } else {
    for (let i = 0; i < count / 2 - 1; i++) {
      current = current.next;
    }
    return current;
  }
};
