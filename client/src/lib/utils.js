export async function waitAtleast(promise, timeSeconds) {
    await new Promise(resolve => setTimeout(() => resolve(), timeSeconds * 1000));
    return await promise;
}
