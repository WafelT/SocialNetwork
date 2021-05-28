import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, togglePreloader } from '../../redux/findUsersReducer';
import FindUsers from './FindUsers';

class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.togglePreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.togglePreloader(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            <FindUsers
                pageSize={this.props.pageSize} 
                foundUsers={this.props.foundUsers} 
                totalUsersCount={this.props.totalUsersCount} 
                follow={this.props.follow} 
                unFollow={this.props.unFollow} 
                currentPage={this.props.currentPage} 
                onPageChange={this.onPageChange} 
                isFetching={this.props.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        foundUsers : state.findUsersPage.foundUsers,
        totalUsersCount : state.findUsersPage.totalUsersCount, 
        pageSize : state.findUsersPage.pageSize, 
        currentPage : state.findUsersPage.currentPage,
        isFetching : state.findUsersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow : (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow : (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setCurrentPage : (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setUsers : (foundUsers) => {
//             dispatch(setUsersAC(foundUsers));
//         },
//         setTotalUsersCount : (usersCount) => {
//             dispatch(setTotalUsersCountAC(usersCount));
//         },
//         togglePreloader : (isFetching) => {
//             dispatch(togglePreloaderAC(isFetching));
//         },
//     }
// }


export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, togglePreloader })(FindUsersContainer);