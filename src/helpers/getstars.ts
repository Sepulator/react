export function getStars(rating: number) {
  rating = Math.round(rating * 2) / 2;
  const output = [];

  // eslint-disable-next-line no-var
  for (var i = rating; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  if (i === 0.5)
    output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  for (let i = 5 - rating; i >= 1; i--)
    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  return output.join('');
}
