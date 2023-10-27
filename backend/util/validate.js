function validateSchema(reqData, schema) {
  try {
    for (eachKey in reqData) {
      if (!(eachKey in schema)) {
        return { success: false, message: 'invalid key passed' };
      }

      const schemaOptions = schema[eachKey].split(':');

      if (!(typeof reqData[eachKey] === schemaOptions[0])) {
        return { success: false, message: 'invalid type passed' };
      }

      if (typeof reqData[eachKey] === 'string') {
        handleString(eachKey, reqData, schemaOptions);
      }

      if (typeof reqData[eachKey] === 'number') {
        handleNumer(eachKey, reqData);
      }

      if (typeof reqData[eachKey] === 'object' && schemaOptions === 'array') {
        handleArray(eachKey, reqData, schemaOptions);
      }
    }
  } catch (err) {
    return { success: false, message: err };
  }
  return { success: true };
}

function handleString(eachKey, reqData, schemaOptions) {
  const keyLength = schemaOptions[1];
  const isSpecialCharactersPresent = schemaOptions[2] === 'true';
  const specialCharacters = schemaOptions[3];
  const isKeyContainSpecialCharacter = /[^0-9a-z ]/gi.test(reqData[eachKey]);

  if (reqData[eachKey].length > keyLength) {
    throw 'value is too long';
  }

  if (isKeyContainSpecialCharacter && !isSpecialCharactersPresent) {
    throw 'special characters are not allowed';
  }

  if (isSpecialCharactersPresent) {
    const dynamicRegex = new RegExp(`[^0-9a-z ${specialCharacters}]`, 'gi');
    if (dynamicRegex.test(reqData[eachKey])) {
      throw 'invalid special character';
    }
  }
}

function handleNumer(eachKey, reqData) {}

function handleArray(eachKey, reqData, schemaOptions) {
  for (eachKey in reqData) {
    if (typeof reqData[eachKey] !== schemaOptions[1]) {
      throw 'datatype is not matching';
    }
  }
}

export default validateSchema;
