import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { BsSuitHeartFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaCircleUser, FaClipboardList, FaUserCheck, FaUsers } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaUserFriends } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SideBar() {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <React.Fragment>
            <Button className="lg:hidden w-10 h-10 p-2 bg-bgPrimary text-blue-gray-500 rounded-md" onClick={openDrawer} ><HiOutlineMenu className="w-full h-full" /></Button>
            <Drawer open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-start justify-between p-4 bg-blue-gray-50">
                    <div>
                        <FaCircleUser className="h-16 w-16 mb-2 text-blue-gray-100"/>
                        <Typography variant="h5" color="blue-gray" className="font-normal">
                            <Link to={'/'}>Sign in</Link> | <Link to={'/'}>Register</Link>
                        </Typography>
                    </div>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <AiFillHome />
                        </ListItemPrefix>
                        Home
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <BiSolidCategory />
                        </ListItemPrefix>
                        Categories
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <BsSuitHeartFill />
                        </ListItemPrefix>
                        Favorites
                        <ListItemSuffix>
                            <Chip
                                value="14"
                                size="sm"
                                variant="ghost"
                                color="blue-gray"
                                className="rounded-full"
                            />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <FaClipboardList />
                        </ListItemPrefix>
                        My Orders
                    </ListItem>
                    <hr />
                    <ListItem>
                        <ListItemPrefix>
                            <TbWorld />
                        </ListItemPrefix>
                        English | US
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <TfiHeadphoneAlt />
                        </ListItemPrefix>
                        Contact Us
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <FaUsers />
                        </ListItemPrefix>
                        About
                    </ListItem>
                    <hr />
                    <ListItem>
                        <ListItemPrefix>
                            <FaUserCheck />
                        </ListItemPrefix>
                        User Agreement
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <FaUserFriends />
                        </ListItemPrefix>
                        Partnership
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <MdPrivacyTip />
                        </ListItemPrefix>
                        Privacy Policy
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <FiLogOut />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}