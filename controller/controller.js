import ProductModel from "../model/products.js"

class MyController {
    static index = (req, res) => {
        res.send('Server is started')
    }
    static getproduct = async (req, res) => {
        const data = await ProductModel.find()
        res.send(data)
    }
    static deleteit = async (req, res) => {
        await console.log(req.params.id)
        const id = req.params.id;

        try {
            const deletequery = await ProductModel.findByIdAndDelete(id);
            if (deletequery) {
                // deleted
            }
            // console.log(dele)
        } catch (error) {
            console.log(error)
        }
    }
    static search = async (request, rend) => {
        const searchkey = request.params.searchkey
        // console.l
        console.log(searchkey)
        // await ProductModel.find({ name: searchedkey })
        const result = await ProductModel.find({ name: searchkey })
        console.log(result)
        rend.send(result)
    }
    static insert = async (req, res) => {


        try {
            const { name, author, price, avatar } = req.body
            console.log("asdf")
            console.log("file is" + req.file)
            const filename = req.file.filename
            console.log(req.file)
            // console.log(req.body)
            let myData = new ProductModel({
                name: name,
                author: author,
                price: price,
                desc: "",
                image: req.file.filename,
            });

            console.log(myData)
            await myData.save()
                .then(item => {
                    res.send("item saved to database");
                })
                .catch(err => {
                    res.status(400).send("unable to save to database");
                });
        } catch (error) {

        }
        // destrure of data


    }
}

export default MyController