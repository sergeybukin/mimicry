export const findClosestTime: (arr: any) => any = (arr) => {
  let closest;
  const currTime = new Date();

  arr.reduce((prev: any, curr: any, i: number) => {
    if (
      Math.abs(
        new Date(curr.date.unix * 1000).getTime() - currTime.getTime()
      ) <=
      Math.abs(new Date(prev.date.unix * 1000).getTime() - currTime.getTime())
    ) {
      closest = { closestItem: curr, index: i };
      return curr;
    }
    return prev;
  });
  return closest;
};
