export const groupLabelFindingHelper = (groups, groupId) => {
  const group = groups.filter(({ gid }) => gid === parseInt(groupId))[0]?.name;
  return group;
};