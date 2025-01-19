import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faLeaf, faSeedling, faTools, faTruck, faUserFriends} from "@fortawesome/free-solid-svg-icons";


export function Dashboard(){
    return(
        <>
            <div className="container mx-auto py-20">
                <div className="grid p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Fields Card */}
                    <div className="hover: cursor-pointer shadow-lg rounded-lg p-6 text-center">
                        <div className="text-green-500 text-4xl mb-4">
                            <FontAwesomeIcon icon={faSeedling} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">Fields</h3>
                        <p className="text-2xl font-bold text-gray-400 mt-2" id="fieldCount">
                            0
                        </p>
                    </div>

                    {/* Crops Card */}
                    <div className="hover: cursor-pointer shadow-lg rounded-lg p-6 text-center">
                        <div className="text-green-500 text-4xl mb-4">
                            <FontAwesomeIcon icon={faLeaf} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">Crops</h3>
                        <p className="text-2xl font-bold text-gray-400 mt-2" id="cropCount">
                            0
                        </p>
                    </div>

                    {/* Staff Card */}
                    <div className="hover: cursor-pointer shadow-lg rounded-lg p-6 text-center">
                        <div className="text-blue-500 text-4xl mb-4">
                            <FontAwesomeIcon icon={faUserFriends} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">Staff</h3>
                        <p className="text-2xl font-bold text-gray-400 mt-2" id="staffCount">
                            0
                        </p>
                    </div>

                    {/* Vehicles Card */}
                    <div className="hover: cursor-pointer shadow-lg rounded-lg p-6 text-center">
                        <div className="text-yellow-500 text-4xl mb-4">
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">Vehicles</h3>
                        <p className="text-2xl font-bold text-gray-400 mt-2" id="vehicleCount">
                            0
                        </p>
                    </div>

                    {/* Equipment Card */}
                    <div className="hover: cursor-pointer shadow-lg rounded-lg p-6 text-center">
                        <div className="text-red-500 text-4xl mb-4">
                            <FontAwesomeIcon icon={faTools} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">Equipment</h3>
                        <p className="text-2xl font-bold text-gray-400 mt-2" id="equipmentCount">
                            0
                        </p>
                    </div>

                    {/* Logs Card */}
                    <div className="hover: cursor-pointer shadow-lg rounded-lg p-6 text-center">
                        <div className="text-purple-500 text-4xl mb-4">
                            <FontAwesomeIcon icon={faBook} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">Logs</h3>
                        <p className="text-2xl font-bold text-gray-400 mt-2" id="logCount">
                            0
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}