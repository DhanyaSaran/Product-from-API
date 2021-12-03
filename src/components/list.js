
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { fetchPosts } from '../action/index'

let products = []

class List extends React.Component {
    constructor() {
        super()

    }

    componentDidMount() {
        this.props.fetchPosts()

    }


    getlist = () => {

        const txs = this.props.posts.filter(x => x.category == 'EkoStore')
        products = txs.filter(x => x.ext_icon != undefined)
        console.log(products)
    }


    render() {

        return (

            <View>

                {this.getlist()}
                <View style={{
                    flex: 1,
                    backgroundColor: 'yellow',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    padding: 30,
                    flexWrap: 'wrap'
                }}>
                    {
                        products.map((item, index) => (
                            item.ext_icon.includes('http') ?
                                item.id != 330 ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductsScreen', {itemDetails:item})} >
                                        <Image source={{ uri: item.ext_icon }} style={styles.image} />
                                    </TouchableOpacity> : <View></View>

                                :
                                item.id == 599 ?
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductsScreen', {itemDetails:item})}>
                                        <Image source={require('../../images/brands/sheamroo-bhakti.png')} style={styles.image} />
                                    </TouchableOpacity>
                                    :

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductsScreen', {itemDetails:item})}>
                                        <Image source={require('../../' + item.ext_icon)} style={styles.image} />
                                    </TouchableOpacity>
                        ))
                    }
                </View>

            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(List)


const styles = StyleSheet.create({
    image: {
        width: 100, height: 100, resizeMode: 'contain', marginLeft: 20, marginRight: 20
    }
})