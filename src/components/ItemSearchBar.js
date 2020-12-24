import React from 'react'
import { Searchbar } from 'react-native-paper';
import { styles } from '../Style/SearchStyle'

const ItemSearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
        style={styles.searchBarView}
        inputStyle={styles.searchBarText}
        placeholder="Pencarian..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
    );
}

export default ItemSearchBar