// validation
function validateUrl(url) {
  const regex = /^(http|https):\/\/[^ "]+$/;
  return regex.test(url);
}

module.exports = validateUrl;