module.exports = function ( respoonse ) {
    return {
        success: respoonse.success ? true: false,
        code: respoonse.code ?? 200,
        data: respoonse.data ?? undefined,
        error: respoonse.error ?? undefined,
    }
}