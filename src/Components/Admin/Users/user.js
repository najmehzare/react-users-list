import React, {useContext} from 'react';
import UsersListContext from '../../../Contexts/usersListContext';

function User({ user , index , deleteUserHandler , editUserHandler} ) {

    const usersContext = useContext(UsersListContext);

    return (
        <tr key={user.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {index + 1}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.family}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.isAdmin}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.membershipDate}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button
                    type="button"
                    onClick={() => {usersContext.editUser(user.id)}}
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ml-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => {usersContext.deleteUser(user.id)}}
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        </tr>      
    )
}

export default User;