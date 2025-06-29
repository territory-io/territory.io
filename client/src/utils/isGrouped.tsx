// function to check if a user is part of a group/team
// checks the db table of group_members to see if the user.id matches any of the group_members.user_id
// if it does, return true, else return false

// import { useEffect, useState } from "react";
// import { getGroupMembers } from "../api/groupMembersApi"; // Adjust the import path as necessary

// export const isGrouped = async (userId: string): Promise<boolean> => {
//   try {
//     const groupMembers = await getGroupMembers();
//     return groupMembers.some(member => member.user_id === userId);
//   } catch (error) {
//     console.error("Error checking group membership:", error);
//     return false; // Return false if there's an error
//   }
// };

// export const useIsGrouped = (userId: string): boolean => {
//   const [isGrouped, setIsGrouped] = useState<boolean>(false);

//   useEffect(() => {
//     const checkGroupMembership = async () => {
//       try {
//         // Simulate an API call to get group members
//         // Replace this with your actual API call
//         const groupMembers = await getGroupMembers();
//         setIsGrouped(groupMembers.some(member => member.user_id === userId));
//       } catch (error) {
//         console.error("Error checking group membership:", error);
//         setIsGrouped(false); // Default to false on error
//       }
//     };

//     checkGroupMembership();
//   }, [userId]);

//   return isGrouped;
// };

export function isGrouped(): boolean {
  // Force state for testing purposes
  // In a real application, you would check the user's group membership from the database or API
  return true;
}
