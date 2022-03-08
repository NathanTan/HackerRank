/**
 * Definition for singly-linked list.

 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let it1 = l1
    let it2 = l2
    let carry = 0

    let result = new ListNode(0, null)
    let rit = result

    while (it1 != null || it2 != null) {
        let x = (it1 != null) ? it1.val : 0
        let y = (it2 != null) ? it2.val : 0

        let sum = x + y + carry

        carry = Math.floor(sum / 10)

        rit.next = new ListNode(sum % 10, null)

        // Increment
        if (it1 != null)
            it1 = it1.next
        if (it2 != null)
            it2 = it2.next
        rit = rit.next

    }
    if (carry > 0) {
        rit.next = new ListNode(carry, null);
    }
    return result.next
};