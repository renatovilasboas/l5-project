function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

const requestUrl = async (url) => {
  const response = await fetch(url);
  if (!response) {
    throw new UserException(`Request Failed ${url}`);
  }

  return response.json();
};

export default requestUrl;
