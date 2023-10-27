const viewProductService = async (data, res) => {
  try {
    res.send(data)
  } catch (error) {
    console.log(error)
  }finally {
    console.log(`Finally Resolved`)
  }
}

export default {viewProductService}