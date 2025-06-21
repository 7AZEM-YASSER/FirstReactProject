"use client";

import { createContext, useState, useEffect } from "react";

export const TheContext = createContext(null);

export function TaskContextProvider({ children }) {

  const [todoArr, setTodoArr] = useState([]);
  const [isLoadedFromLocalStorage, setIsLoadedFromLocalStorage] = useState(false);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("myTasks");
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        if (Array.isArray(parsedTasks)) {
          setTodoArr(parsedTasks);
        } else {
          setTodoArr([]);
        }
      } else {
        console.log("TaskContextProvider: No tasks found in localStorage.");
      }
    } catch (error) {
      console.error("TaskContextProvider: Failed to parse tasks from localStorage:", error);
      setTodoArr([]);
    } finally {
      setIsLoadedFromLocalStorage(true);
    }
  }, []);

  useEffect(() => {
    if (isLoadedFromLocalStorage && Array.isArray(todoArr)) {
      if (todoArr.length > 0) {
        localStorage.setItem("myTasks", JSON.stringify(todoArr));
      } else {
        if (localStorage.getItem("myTasks")) {
          localStorage.removeItem("myTasks");
        }
      }
    } else {
        // console.log("TaskContextProvider: Not saving/removing (isLoadedFromLocalStorage is false or todoArr not array)."); // أضف هذا لتتبع أفضل
    }
  }, [todoArr, isLoadedFromLocalStorage]);
  //   try {
  //     if (typeof window !== 'undefined' && window.localStorage) {
  //       const storedTasks = localStorage.getItem("myTasks");
  //       if (storedTasks) {
  //         const parsedTasks = JSON.parse(storedTasks);
  //         if (Array.isArray(parsedTasks)) {
  //           return parsedTasks;
  //         } else {
  //           console.warn("TaskContextProvider: Stored data is not an array. Initializing with empty array.");
  //         }
  //       }
  //     } else {
  //       console.log("TaskContextProvider: localStorage not available (server-side render or no browser). Initializing with empty array.");
  //     }
  //   } catch (error) {
  //     console.error("TaskContextProvider: Failed to parse initial tasks from localStorage:", error);
  //   }
  //   return [];
  // });

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     if (Array.isArray(todoArr)) {
  //       if (todoArr.length > 0) {
  //         localStorage.setItem("myTasks", JSON.stringify(todoArr));
  //       } else {
  //         if (localStorage.getItem("myTasks")) {
  //           localStorage.removeItem("myTasks");
  //           console.log("TaskContextProvider: Cleared all tasks from localStorage.");
  //         } else {
  //             console.log("TaskContextProvider: todoArr is empty, and localStorage was already empty. No action taken.");
  //         }
  //       }
  //     } else {
  //       console.error("TaskContextProvider: todoArr is not an array, cannot save/remove.", todoArr);
  //     }
  //   }
  // }, [todoArr]);

  const contextValue = [todoArr, setTodoArr];

  return (
    <TheContext.Provider value={contextValue}>{children}</TheContext.Provider>
  );
}
