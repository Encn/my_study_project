r.table('project').replace(function (doc) {
        return doc.merge({
                    ownerList: doc('ownerList').map(function (item) {
                                    return {
                                                        userId: item
                                                    };
                                })
                });
    });
