// User IDs - must be an array of strings
var users = ["5f4a7fe4afa10d00011731d3"];
// Queue ID - this can be a string or an array of strings to assign into multiple queues
var queue_id = ["5ec55367a16f5e000189f5ce"];
const canary = false; // Is this tenant in Canary?
const mode_assign = true; // Will remove users if set to false
if (typeof queue_id === "string") {
  changeMembers(queue_id);
} else {
  for (let q of queue_id) {
    changeMembers(q);
  }
}
function changeMembers(queue_id) {
  for (let u of users) {
    fetch(
      `https://edge.${canary ? "na." : ""}chilipiper.com/queue/${queue_id}/user/${mode_assign ? "assign" : "unassign"}`,
      {
        headers: {
          "content-type": "application/json",
        },
        body: `["${u}"]`,
        method: "POST",
        credentials: "include",
      }
    );
  }
}
