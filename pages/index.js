import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AddIcon from "@mui/icons-material/Add";
import Header from "../Components/Header";
import CreateNewDoc from "../Components/CreateNewDoc";
import { getSession, useSession } from "next-auth/react";
import Login from "../Components/Login";
import { Icon, IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Home() {
  const { data: session } = useSession();
  const [documentData, setDocumentData] = useState([]);

  if (!session) return <Login />;
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "userDocs", session.user.email, "docs"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDocumentData(data);
      console.log(data);
    };
    getData();
  }, [documentData]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Google-Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="shadow-sm px-4 py-2 sticky z-10">
        <Header session={session} />
      </div>
      <section className="bg-gray-100 h-80">
        <CreateNewDoc session={session} />
      </section>
      <section>
        <div className="mx-auto max-w-4xl ">
          <div className="flex justify-between pt-10">
            <div>
              <p>My Documents</p>
            </div>
            <div className="flex items-center">
              <p>Date Created</p>
              <div className="ml-5">
                <IconButton>
                  <FolderIcon />
                </IconButton>
              </div>
            </div>
          </div>
          {documentData?.map((doc) => {
            return (
              <div
                key={doc.id}
                className="p-4 flex items-center rounded-md
              hover:bg-gray-100 text-gray-700 text-sm cursor-pointer
              "
              >
                <ArticleIcon className="text-blue-500" />
                <p className="flex-grow pl-5 w-10 pr-10 truncate">
                  {doc.filename}
                </p>
                <p className="pr-5 text-sm">
                  {doc.timestamp?.toDate().toLocaleDateString()}
                </p>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
