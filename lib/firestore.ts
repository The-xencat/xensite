// import {
//     addDoc,
//     collection,
//     getDocs,
//     orderBy,
//     query,
//     serverTimestamp,
//   } from "firebase/firestore";
  
//   import { db } from "@/firebase/firebase";
  
//   export async function addAdvice(
//     name: string,
//     profession: string,
//     message: string
//   ) {
//     await addDoc(collection(db, "advice"), {
//       name,
//       profession,
//       message,
//       approved: true,
//       createdAt: serverTimestamp(),
//     });
//   }
  
//   export async function getAdvice() {
//     const q = query(
//       collection(db, "advice"),
//       orderBy("createdAt", "desc")
//     );
  
//     const snapshot = await getDocs(q);
  
//     return snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...(doc.data() as any),
//     }));
//   }

// -----------------------------
// Reviews
// -----------------------------

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

/* =====================================================
   LETTERS TO XEN
===================================================== */

export async function addAdvice(
  name: string,
  profession: string,
  message: string
) {
  return await addDoc(collection(db, "advice"), {
    name,
    profession,
    message,
    approved: true,
    createdAt: serverTimestamp(),
  });
}

export async function getAdvice() {
  const q = query(
    collection(db, "advice"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as any),
  }));
}

/* =====================================================
   PROFESSIONAL REVIEWS
===================================================== */

export async function addReview(
  name: string,
  role: string,
  company: string,
  rating: number,
  review: string
) {
  return await addDoc(collection(db, "reviews"), {
    name,
    role,
    company,
    rating,
    review,
    approved: true,
    createdAt: serverTimestamp(),
  });
}

export async function getReviews() {
  const q = query(
    collection(db, "reviews"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as any),
  }));
}

/* =====================================================
   WEBSITE ANALYTICS
===================================================== */

async function ensureStatsDocument() {
  const ref = doc(db, "stats", "website");

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    await setDoc(ref, {
      visitors: 0,
      resumeDownloads: 0,
    });
  }

  return ref;
}

/* ---------------- Visitors ---------------- */

export async function increaseVisitorCount() {
  const ref = await ensureStatsDocument();

  await updateDoc(ref, {
    visitors: increment(1),
  });
}

export async function getVisitorCount() {
  const ref = await ensureStatsDocument();

  const snapshot = await getDoc(ref);

  return snapshot.data()?.visitors ?? 0;
}

/* ---------------- Resume Downloads ---------------- */

export async function increaseResumeDownloads() {
  const ref = await ensureStatsDocument();

  await updateDoc(ref, {
    resumeDownloads: increment(1),
  });
}

export async function getResumeDownloads() {
  const ref = await ensureStatsDocument();

  const snapshot = await getDoc(ref);

  return snapshot.data()?.resumeDownloads ?? 0;
}