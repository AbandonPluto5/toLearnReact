import { useSyncExternalStore, useDebugValue } from "react";

export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  // 可以在开发者工具中显示自定义hooks中要调试的数据
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
