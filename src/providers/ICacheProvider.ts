interface ICacheProvider {
  /**
   * save - Saves a key:value in Redis
   * @param key key identifier to use later
   * @param value the key value to be saved
   */
  save(key: string, value: any): Promise<void>
  /**
   * recover - Recovers the key content, if exists.
   * @param key key identifier to get it content;
   */
  recover<T>(key: string): Promise<T | null>;
  /**
   * invalidade - Invalidate/delete the key, if it exists
   * @param key - key identifier to be deleted
   */
  invalidade(key: string): Promise<void>;
  /**
   * invalidadePrefix - Invalidade/delete all keys that starts with prefix param
   * @param prefix - prefix to discover all keys that starts with and delete all
   *  of them
   */
  invalidatePrefix(prefix: string): Promise<void>;
}

export { ICacheProvider }