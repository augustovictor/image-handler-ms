import easyimage from 'easyimage'
import path from 'path'

class ImagesController {
    constructor() {
        this._img = path.join(__dirname, '../../image.jpg')
    }

    info(req, res) {
        easyimage.info(req.body.uri)
            .then((file) => {
                res.send(file)
            }, (e) => Promise.reject(e))
            .catch(e => res.send(e.message))
    }

    transform(req, res) {
        easyimage.info(req.body.uri)
            .then(file => {
                easyimage.rescrop({
                    src       : req.body.uri,
                    dst       : './output/dst.jpg',
                    width     : req.body.width || file.width,
                    height    : req.body.height || file.height,
                    cropwidth : req.body.cropWidth || file.width,
                    cropheight: req.body.cropHeight || file.height,
                    x         : req.body.initialX || 0,
                    y         : req.body.initialY || 0,
                })
                .then(file => {
                    res.sendFile(path.join(__dirname, '../../', file.path))
                }, (e) => Promise.reject(e.message))
            }, (e) => Promise.reject(e))
        .catch(e => res.send(e.message))
    }
}

export default new ImagesController()